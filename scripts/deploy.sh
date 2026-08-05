#!/usr/bin/env bash
set -euo pipefail

TARGET=/var/www/displayhive.org
OWNER=nginx:nginx

rsync -a --delete public/ "$TARGET/"
sudo chown -R "$OWNER" "$TARGET"
sudo find "$TARGET" -type d -exec chmod 755 {} \;
sudo find "$TARGET" -type f -exec chmod 644 {} \;
