const sonarqubeScanner = require('sonarqube-scanner')
sonarqubeScanner({
  serverUrl: 'http://52.82.10.96:9000',
	options: {
		'sonar.projectKey': 'panda-ui',
		'sonar.projectName': 'panda-ui',
		'sonar.sourceEncoding': 'UTF-8',
		'sonar.sources': '.',
		'sonar.inclusions': 'src/**' // Entry point of your code
	}
}, (a, b) => {
    console.log(a, b)
})