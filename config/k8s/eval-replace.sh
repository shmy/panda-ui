#!/bin/bash

eval "cat <<EOF
$(< panda-ui-template.yaml)
EOF" > panda-ui.yaml