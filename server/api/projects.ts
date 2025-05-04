import { createError } from 'h3'
import { promises as fs } from 'fs'
import { resolve } from 'path'

export default defineEventHandler(async (event) => {
  try {
    // Get all project files from the content/projects directory
    const contentDir = resolve(process.cwd(), 'content')
    const projectsDir = resolve(contentDir, 'projects')
    
    // Read all files in the projects directory
    const files = await fs.readdir(projectsDir)
    
    // Process each project file
    const projects = await Promise.all(
      files
        .filter(file => file.endsWith('.json'))
        .map(async (file) => {
          const filePath = resolve(projectsDir, file)
          const content = await fs.readFile(filePath, 'utf-8')
          return JSON.parse(content)
        })
    )
    
    // Sort projects by ID in descending order if available
    projects.sort((a, b) => {
      // Extract ID from filename if available
      const idA = parseInt(a.id || '0')
      const idB = parseInt(b.id || '0')
      return idB - idA
    })
    
    return { projects }
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch projects'
    })
  }
}) 
