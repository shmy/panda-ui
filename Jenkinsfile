#!groovy
  node {
    stage('Build') {
      environment {
        CI = 'true'
      }
      docker.image('node:alpine').inside {
        sh 'node -v'
      }
    }

    stage('Deploy') {
       sh 'docker --version'
    }
}
