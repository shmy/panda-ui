#!groovy
node {
    stage ("Checkout") {
      checkout scm
    }

    stage('Sonar') {
      dir('sonar') {
        sh 'ls -a'
        sh 'docker build -t sonar .'
      }
      sh 'ls -a'
      docker.image('sonar').inside() {
        sh 'sonar-scanner'
      }
    }


}
