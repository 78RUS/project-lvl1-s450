install:
	npm install
start:
	npx babel src --out-dir dist
publish:
	npm publish
make lint:
	npx eslint .
