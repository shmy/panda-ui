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
        sh 'ls -a'
        sh 'npm run sonar'

      }
    }

    stage('Deploy') {
        docker.build('panda-ui')
        docker.withRegistry('https://955095959256.dkr.ecr.cn-northwest-1.amazonaws.com.cn', 'ecr:cn-northwest-1:panda-ecr') {
          docker.image('panda-ui').push('latest')
        }
    }
}
