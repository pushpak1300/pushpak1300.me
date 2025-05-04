import { createError } from 'h3'
import { promises as fs } from 'fs'
import { resolve } from 'path'

export default defineEventHandler(async (event) => {
  try {
    // Get all blog files from the content/blogs directory
    const contentDir = resolve(process.cwd(), 'content')
    const blogsDir = resolve(contentDir, 'blogs')
    
    // Read all files in the blogs directory
    let blogs = []
    
    try {
      // Check if the directory exists
      await fs.access(blogsDir)
      
      // Read all files in the blogs directory
      const files = await fs.readdir(blogsDir)
      
      // Process each blog file
      blogs = await Promise.all(
        files
          .filter(file => file.endsWith('.json') || file.endsWith('.md'))
          .map(async (file) => {
            const filePath = resolve(blogsDir, file)
            const content = await fs.readFile(filePath, 'utf-8')
            
            // Handle different file types
            if (file.endsWith('.json')) {
              return JSON.parse(content)
            } else if (file.endsWith('.md')) {
              // Basic frontmatter parsing for markdown files
              const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
              if (frontmatterMatch && frontmatterMatch[1]) {
                const frontmatter: Record<string, string> = {}
                frontmatterMatch[1].split('\n').forEach(line => {
                  const [key, ...valueParts] = line.split(':')
                  if (key && valueParts.length) {
                    frontmatter[key.trim()] = valueParts.join(':').trim()
                  }
                })
                return frontmatter
              }
              return { title: file.replace('.md', ''), content }
            }
          })
      )
      
      // Filter out any undefined entries
      blogs = blogs.filter(Boolean)
      
      // Sort blogs by published_at in descending order
      blogs.sort((a, b) => {
        const dateA = a.published_at ? new Date(a.published_at) : new Date(0)
        const dateB = b.published_at ? new Date(b.published_at) : new Date(0)
        return dateB.getTime() - dateA.getTime()
      })
    } catch (e) {
      // If the directory doesn't exist, return an empty array
      console.warn('Blogs directory not found or inaccessible', e)
      blogs = []
    }
    
    return { blogs }
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch blogs'
    })
  }
}) 
