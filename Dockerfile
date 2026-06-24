# Use the official Nginx lightweight image
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the static website files to Nginx's serving directory
COPY src /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Basic healthcheck to verify Nginx is responding
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start Nginx (handled by the base image, but explicit is good)
CMD ["nginx", "-g", "daemon off;"]
