import { createError } from 'h3'
import { promises as fs } from 'fs'
import { resolve } from 'path'
import type { TalksResponse, RawTalk } from '~/types/content'

export default defineEventHandler(async (event) => {
  try {
    // Directly read the talks.json file from the filesystem
    const contentDir = resolve(process.cwd(), 'content')
    const talksPath = resolve(contentDir, 'talks/talks.json')
    const fileContent = await fs.readFile(talksPath, 'utf-8')
    const talksData = JSON.parse(fileContent)
    
    if (!talksData?.talks || !Array.isArray(talksData.talks)) {
      return { talks: [] }
    }

    // Transform the data into the expected format
    const groupedTalks: Record<string, RawTalk> = {}
    
    talksData.talks.forEach((talk: any) => {
      if (!groupedTalks[talk.title]) {
        groupedTalks[talk.title] = {
          title: talk.title,
          instances: []
        }
      }
      
      groupedTalks[talk.title].instances.push({
        conference: talk.conference,
        date: talk.date,
        slidesUrl: talk.slidesUrl,
        youtubeUrl: talk.youtubeUrl,
        tweetUrl: talk.tweetUrl
      })
    })
    
    // Return the transformed talks array
    return { talks: Object.values(groupedTalks) } as TalksResponse
  } catch (error) {
    console.error('Error fetching talks:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch talks'
    })
  }
}) 
