#!groovy
node {
    stage ("Checkout") {
      checkout scm
    }

    stage('Sonar') {
      sh 'cd sonar'
      sh 'ls -a'
      sh 'docker build -t sonar .'
      sh 'cd ../'
      sh 'ls -a'
      docker.image('sonar').inside() {
        sh 'sonar-scanner'
      }
    }


}
