# Langara Computer Science Club Website

Prerequisites:
-   **Docker:** Version 20.10.17 or higher
-   **Docker Compose:** Version 2.5.0 or higher

Check your Docker and Docker Compose versions by running the following commands in your terminal:

    $ docker --version
    $ docker-compose --version

## Table of Contents

1.  [Cloning](#cloning)
2.  [Configuration](#configuration)
3.  [Building the Image](#building-the-image)
4.  [Running the Container](#running-the-container)
    1.  [Troubleshooting](#troubleshooting)

## Cloning

To obtain the source code, clone the repository to your local machine:

    $ git clone https://github.com/langaracpsc/LangaraCPSC.WebAPI.git

This creates a new directory called `LangaraCPSC.WebAPI` containing all the necessary files for the deployment.

## Configuration

Before building the Docker image, configure the environment variables required by the application. In the root directory of the project, create a file named `.env.local` with the following content:

```ini
APIURL=<your API URL>
APIKEY=<your API key>
```

Replace `<your API URL>` and `<your API key>` with the actual values provided by the API provider. The `APIURL` variable specifies the base URL of the API endpoint, while the `APIKEY` variable contains the authentication token needed to access the API. To avoid accidental commits, add `.env.local` to the Git ignore list.

## Building the Image

With the environment variables properly configured, build the Docker image:

    $ docker build -t langaracpscnext .

This command generates a new Docker image based on the `Dockerfile` located at the root directory of the project, using the tag `langaracpscnext`. Feel free to modify this tag if desired.

## Running the Container

Start the container after successful construction:

    $ docker run -p 3000:3000 -v $(PWD)/src:/app/src langaracpscnext

This command exposes port 3000 on your host machine to port 3000 within the container. Furthermore, it binds the present working directory (which houses the source code) to `/app/src` inside the container. Any modifications applied to the source code outside the container affect its contents instantly due to this connection, eliminating the necessity to reconstruct the image repeatedly. Once initiated, visit the Langara Computer Science Club site through [`http://localhost:3000`](http://localhost:3000). Address any arising concerns encountered throughout the deployment procedure via the subsequent [Troubleshooting](#troubleshooting) guide.

### Troubleshooting

Below are several typical problems faced during the deployment process along with applicable remedies:

-   **Error response from daemon: OCI runtime create failed:** Confirm proper installation and operation of Docker on your device. Consider restarting the Docker service or your computer.
-   **Failed to load resource: net::ERR\_CONNECTION\_REFUSED:** Determine whether the container operates effectively by invoking `docker ps`. For guidance regarding specific mistakes, inspect the logs produced by the container utilizing `docker logs <container ID>`.
-   **404 Not Found:** Validate the accuracy of the `APIURL` and `APIKEY` defined in the `.env.local` relative to those given by the API supplier. Moreover, ascertain that the server responsible for hosting the API remains reachable across the network.
