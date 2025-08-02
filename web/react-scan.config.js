// react-scan.config.js
export default {
  // Root directory to scan
  rootDir: './src',
  
  // Output directory for reports
  outputDir: './react-scan-reports',
  
  // File extensions to scan
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  
  // Directories to exclude
  exclude: ['node_modules', 'dist', '__mocks__'],
  
  // Analysis options
  analysis: {
    // Enable component analysis
    components: true,
    
    // Enable hook analysis
    hooks: true,
    
    // Enable context analysis
    context: true,
    
    // Enable performance analysis
    performance: true,
    
    // Enable dependency analysis
    dependencies: true
  },
  
  // Visualization options
  visualization: {
    // Generate component tree visualization
    componentTree: true,
    
    // Generate dependency graph
    dependencyGraph: true
  }
};
