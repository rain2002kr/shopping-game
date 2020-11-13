FROM nginx:latest

# Set the working directory.


# this is a comment-line
RUN echo start

WORKDIR /usr/share/nginx/html

# Copy the file from your host to your current location.
VOLUME ["/var/www:/usr/share/nginx/html:rw" ]

# Run the specified command within the container.
CMD [ "nginx", "-g", "daemon off;" ]


# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 80






