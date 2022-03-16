Sample CLI scripts for exporting and importing.

These only work with one space per account; if another space is added, additional flags for the space-id and management-token will have to be added. 

Tests using the --config flag and a config.json instead of multiple flags failed.

export script: 
"contentful space export --environment-id "master-2022-03-10" --skip-content-model --skip-roles --skip-webhooks --content-only --content-file "exported-data.json" --use-verbose-renderer"

import script: 
"contentful space import --environment-id "release-1" --content-file "exported-data.json" --skip-content-model"