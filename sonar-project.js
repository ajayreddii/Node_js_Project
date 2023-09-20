const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'http://54.176.1.121:9000/',
    options: {
      'sonar.projectDescription': 'This is a Node JS application',
      'sonar.projectName': 'Node JS Application',
      'sonar.projectKey': 'NodeJs',
      'sonar.login': 'squ_0f6cf669cd1d0b883c723d004c7b8511d9ea6dc3',
      //'sonar.login': 'admin',
      //'sonar.password': 'admin',
      'sonar.projectVersion': '1.0',
      'sonar.language': 'js',
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.sources': '.',
      //'sonar.tests': 'specs',
      //'sonar.inclusions': 'src/**'
    },
  },
  () => {}
);

