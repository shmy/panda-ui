#!groovy
node {
    stage('Build') {
      environment {
        CI = 'true'
      }
      checkout scm
      docker.image('node:alpine').inside {
        sh 'node -v'
        sh 'npm -v'
        sh 'npm config set registry https://registry.npm.taobao.org'
        sh 'npm config get registry'
        sh 'npm install'
        sh 'npm run test:coverage'
        sh 'npm run build'
      }
    }

    stage('Sonar Scan') {
      dir('sonar') {
        sh 'docker build -t sonar .'
      }
      docker.image('sonar').inside() {
        sh 'sonar-scanner'
      }
    }

    stage('Deploy') {
      docker.build('panda-ui')
      docker.withRegistry('https://955095959256.dkr.ecr.cn-northwest-1.amazonaws.com.cn', 'ecr:cn-northwest-1:panda-ecr') {
        docker.image('panda-ui').push('latest')
      }

      dir('config/k8s') {
        docker.image('alpine').inside('-u 0:0') {
          sh 'apk add curl'
          sh 'curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl'
          sh 'chmod +x ./kubectl'
          sh './kubectl --kubeconfig=k8s-config delete deployment/panda-ui-deployment --ignore-not-found=true'
          sh './kubectl --kubeconfig=k8s-config delete service/panda-ui-service --ignore-not-found=true'
          sh 'sleep 60'
          sh './kubectl --kubeconfig=k8s-config create -f panda-ui.yaml'
        }
      }
    }

}
