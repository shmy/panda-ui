#!groovy
node {
    stage ("Checkout") {
      checkout scm
    }

    stage('Build') {
      dir('sonar') {
        sh 'docker build -t sonar .'
      }
      sh 'ls -a'
      docker.image('sonar').inside() {
        sh 'node -v'
        sh 'npm -v'
        sh 'sudo chown -R 1000:1000 /.npm'
        sh 'npm config set registry https://registry.npm.taobao.org'
        sh 'npm config get registry'
        sh 'npm install'
        sh 'npm run test:coverage'
        sh 'npm run build'
        sh 'ls -a'
        sh 'sonar-scanner'
      }
    }

    stage('Deploy') {
        docker.build('panda-ui')
        docker.withRegistry('https://955095959256.dkr.ecr.cn-northwest-1.amazonaws.com.cn', 'ecr:cn-northwest-1:panda-ecr') {
          docker.image('panda-ui').push('latest')
        }
    }

}
