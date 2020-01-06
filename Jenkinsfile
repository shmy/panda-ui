pipeline {
  agent {
    docker {
      image 'node:12.14-alpine3.9'
    }
  }

  stages {
    stage('Build') {
      environment {
        CI = 'true'
      }
      steps {
        sh 'curl -fsSLO https://get.docker.com/builds/Linux/x86_64/docker-17.04.0-ce.tgz && tar xzvf docker-17.04.0-ce.tgz && mv docker/docker /usr/local/bin && rm -r docker docker-17.04.0-ce.tgz'
        sh 'npm config set registry https://registry.npm.taobao.org'
        sh 'npm config get registry'
        sh 'npm install'
        sh 'npm run test:coverage'
        sh 'npm run build'
      }
    }

    stage('Deploy') {
      steps {
        script {
          docker.build('panda-ui')
          docker.withRegistry('https://955095959256.dkr.ecr.cn-northwest-1.amazonaws.com.cn', 'ecr:cn-northwest-1:panda-ecr') {
            docker.image('panda-ui').push('latest')
          }
        }
      }
    }
  }
}