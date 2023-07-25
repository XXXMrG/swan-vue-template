set -e

ROOT_PATH=.

rm -rf ${ROOT_PATH}/output ${ROOT_PATH}/dist
mkdir ${ROOT_PATH}/output

pnpm install --frozen-lockfile --registry=http://registry.npm.baidu-int.com
pnpm run build

cp -r dist/** ${ROOT_PATH}/output