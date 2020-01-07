#!groovy
node {
    stage ("Checkout") {
      checkout scm
    }

    stage('Sonar') {
      sh 'cd sonar'
      docker.build('sonar')
      sh 'cd ../'
      docker.image('sonar').inside() {
        sh 'sonar-scanner'
      }
    }


}
