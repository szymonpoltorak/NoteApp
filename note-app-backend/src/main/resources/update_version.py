import re


def main() -> None:
    regex: str = r"version = '(\d+).(\d+).(\d+)'"
    path: str = "note-app-backend/build.gradle"

    with open(path, "r") as build:
        content: str = build.read()
    matched = re.search(pattern=regex, string=content)
    match: str = matched.group()

    main_release: int = int(matched.group(1))
    update: int = int(matched.group(2))

    if update == 20:
        update = 0
        patch = 0
        main_release += 1
    else:
        update += 1
        patch = 0

    with open(path, "w") as build:
        new_version: str = f"version = '{main_release}.{update}.{patch}'"

        build.write(content.replace(match, new_version))


if __name__ == '__main__':
    main()
