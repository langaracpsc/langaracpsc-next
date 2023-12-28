# langaracpsc-next
Langara Computer Science Club website.

# LangaraCPSC.WebAPI
Web API for langaracpsc-next

## Deployment

### Dependencies
* docker
* docker-compose

### Cloning
```
git clone https://github.com/langaracpsc/LangaraCPSC.WebAPI.git
```

### Configuration
The `.env.local` should contain valid `APIURL` and `APIKEY` variables for the webapp to use. They must be set before building the image. An example of the configuration is shown below.
```bash
# filename: .env.local
APIURL="YOUR_API_URL"
APIKEY="YOUR_API_KEY"
```

### Building the image
```
docker build . -t langaracpscnext; 
```

### Running the container
```bash
docker run -p 3000:3000 langaracpscnext;
```
