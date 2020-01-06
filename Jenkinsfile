#!groovy
  node {
    stage('Build') {
      environment {
        CI = 'true'
      }
      docker.image('node:alpine').inside {
        sh 'node -v'
        sh 'npm -v'
        sh 'npm install'
        sh 'npm run test:coverage'
        sh 'npm run build'
      }
    }

    stage('Deploy') {
       sh 'docker build .'
    }
}
