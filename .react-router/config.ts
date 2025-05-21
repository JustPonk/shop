// React Router configuration
export default {
  // Enable server-side rendering by default
  ssr: true,
  
  // Define the entry point for your application
  entry: "./app/entry.client.tsx",
  
  // Define the server entry point
  serverEntry: "./app/entry.server.tsx",
  
  // Define the root directory for your application
  root: "./app",
  
  // Define the public directory for static assets
  publicDir: "./public",
  
  // Define the build output directory
  outDir: "./dist",
  
  // Enable source maps for development
  sourcemap: true,
  
  // Define the port for the development server
  port: 3000,
}; 