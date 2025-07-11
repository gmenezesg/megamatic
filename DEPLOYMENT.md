# Deployment Guide for Megamatic Application

## Overview
This deployment configuration uses Docker Compose with Traefik for reverse proxy and SSL termination, designed to work with Portainer for container management.

## Prerequisites

1. **Traefik** must be running on your server
2. **Portainer** must be installed and configured
3. **External network** named `traefik` must exist
4. **DNS** must point `megamatic.com.br` to your server's IP

## Setup Instructions

### 1. Create Traefik Network (if not exists)
```bash
docker network create traefik
```

### 2. Deploy with Portainer
1. Log into Portainer
2. Go to **Stacks** → **Add Stack**
3. Choose **Upload** and select `docker-compose.yml`
4. Or use **Web editor** and paste the content
5. Configure environment variables if needed
6. Click **Deploy the stack**

### 3. Manual Deployment (alternative)
```bash
# Clone or copy your files to the server
git clone <your-repo>
cd megamatic

# Build and start services
docker-compose up -d --build
```

## Configuration Details

### Traefik Labels Explained

- **Host Rule**: Routes traffic from `megamatic.com.br` to your app
- **Entrypoints**: Uses both `web` (HTTP) and `websecure` (HTTPS)
- **TLS**: Automatically generates SSL certificates using Let's Encrypt
- **HTTPS Redirect**: Automatically redirects HTTP to HTTPS
- **Security Headers**: Adds security headers for better protection

### Environment Variables

You can customize the following in the docker-compose.yml:

```yaml
environment:
  - NODE_ENV=production
  # Add more environment variables as needed
```

### Health Check

The application includes a health check that:
- Checks every 30 seconds
- Times out after 10 seconds
- Retries 3 times before marking as unhealthy
- Waits 40 seconds before starting checks

## SSL Certificate

The configuration automatically requests SSL certificates from Let's Encrypt for `megamatic.com.br`. Make sure:

1. Your domain points to the server
2. Ports 80 and 443 are accessible
3. Your Traefik configuration has Let's Encrypt enabled

## Monitoring

### Check Container Status
```bash
docker-compose ps
```

### View Logs
```bash
docker-compose logs -f megamatic-app
```

### Check Health Status
```bash
docker inspect megamatic-app | grep -i health
```

## Security Features

- **HTTPS Only**: Automatic redirect from HTTP to HTTPS
- **Security Headers**: XSS protection, content type sniffing prevention
- **HSTS**: HTTP Strict Transport Security enabled
- **Content Security**: Browser-level security enhancements

## Troubleshooting

### Common Issues

1. **Network Error**: Ensure `traefik` network exists
2. **SSL Issues**: Check domain DNS and Let's Encrypt rate limits
3. **Port Conflicts**: Ensure ports 80/443 are not in use by other services
4. **Health Check Fails**: Check if nginx is properly serving the app

### Debugging Commands

```bash
# Check if container is running
docker ps | grep megamatic

# Check container logs
docker logs megamatic-app

# Check network connectivity
docker exec megamatic-app wget -qO- http://localhost:80

# Check Traefik routing
docker logs traefik | grep megamatic
```

## Updates and Maintenance

### Update Application
```bash
# Pull latest changes
git pull

# Rebuild and restart
docker-compose up -d --build
```

### Backup (if using volumes)
```bash
# No volumes are used in this configuration
# Application is stateless
```

## Production Considerations

1. **Resource Limits**: Add memory and CPU limits to prevent resource exhaustion
2. **Logging**: Configure log rotation and centralized logging
3. **Monitoring**: Set up application monitoring and alerting
4. **Backup**: Regular backups of your deployment configuration
5. **Security**: Regular security updates and vulnerability scanning

## Support

For issues with:
- **Application**: Check application logs
- **Traefik**: Check Traefik dashboard and logs
- **Portainer**: Check Portainer logs and documentation
- **SSL**: Verify domain configuration and Let's Encrypt limits 