pipeline {
  agent any

  stages {
    stage('Build') {
      environment {
        CI = 'true'
      }
      steps {
      nodejs(nodeJSInstallationName: 'node12', configId: '') {
        sh 'node -v'
        sh 'npm config ls'
        sh 'npm config set registry https://registry.npm.taobao.org'
        sh 'npm config get registry'
        sh 'npm install'
        sh 'npm run test:coverage'
        sh 'npm run build'
}
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