node {

    checkout scm

    env.DOCKER_API_VERSION="1.23"
    
    sh "git rev-parse --short HEAD > commit-id"

    tag = readFile('commit-id').replace("\n", "").replace("\r", "")
    appName = "laravel-kubernetes"
    registryHost = "davidodw/"
    imageName = "${registryHost}${appName}:${tag}"`
    env.BUILDIMG=imageName

    stage "Build"

        def customImage = docker.build("${imageName}", "-f .")
    
    stage "Push"

        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub') {`
            customImage.push()
            customImage.push('latest')
        }
        
    stage "Deploy"

        sh "kubectl run laravel-kubernetes-demo --image=davidodw/laravel-kubernetes --port=8181 --image-pull-policy=IfNotPresent"
}