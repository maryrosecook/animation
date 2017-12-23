. $HOME/.nvm/nvm.sh && [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
lein cljsbuild auto &
live-server . --port=4000 --no-browser --host=localhost
