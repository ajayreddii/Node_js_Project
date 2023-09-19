const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'http://18.207.120.52:9000/',
    options: {
      'sonar.projectDescription': 'This is a Node JS application',
      'sonar.projectName': 'Node JS Application',
      'sonar.projectKey': 'NodeJs',
      'sonar.login': 'squ_03de450fceb0cc28eb2f2e9d8283783d1b21eca3',
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

