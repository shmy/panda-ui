#!groovy
node {

    stage('Build') {
      environment {
        CI = 'true'
      }

      docker.image('sonarsource/sonar-scanner-cli').inside {
        sh 'sonar-scanner-cli -v'
      }
    }

    stage('Deploy') {
        docker.build('panda-ui')
        docker.withRegistry('https://955095959256.dkr.ecr.cn-northwest-1.amazonaws.com.cn', 'ecr:cn-northwest-1:panda-ecr') {
          docker.image('panda-ui').push('latest')
        }
    }
}
