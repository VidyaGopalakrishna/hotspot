LINTER = flake8
API_DIR = API
DB_DIR = db
REQ_DIR = .
PYDOC = python3 -m pydoc -w
TESTFINDER = nose2

export TEST_MODE = 1

FORCE:

tests: lint unit

unit: FORCE
	$(TESTFINDER) --with-coverage

lint: FORCE
	black -l 79 db/*.py
	black -l 79 API/*.py
	$(LINTER) db/*.py
	$(LINTER) API/*.py

docs: FORCE
	$(PYDOC) ./*.py
	git add ./*.html
