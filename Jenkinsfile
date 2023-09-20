node 
{
  stage ('git clone'){
        git branch: 'main', url: 'https://github.com/ajayreddii/Node_js_Project.git'
  }
   stage('Build') {
        nodejs(nodeJSInstallationName: 'Node.js') {
                       sh "npm run sonar"
        }
   }
   stage ('nexus'){
         nodejs(nodeJSInstallationName: 'Node.js'){
                       sh "npm publish"
         }
}
}


