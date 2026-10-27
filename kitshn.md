# kitshn

This repository deploys with [kitshn 2](https://github.com/Yarden-zamir/kitshn) at https://kit.yarden-zamir.com.

- `kitshn.config.ts` is the recipe: a Compose app on a machine with the label `docker`. Pushes to `main` deploy `prod` at `dozzle.yarden-zamir.com`. Pull requests deploy `pr-<number>` previews.
- `.github/workflows/kitshn.yml` calls the kitshn 2 deploy workflow.
- Both environments start in the Owner circle. Cloudflare Access does the login, so the app has no login of its own.
- `socket-proxy` binds `$KITSHN_DEFAULT_SOCKET`, and the machine tunnel sends the address there.
- `/var/run/docker.sock` is mounted read-only. Dozzle actions and shell access are not enabled.
- Dozzle data lives in the deployment data folder, mounted at `/data`.
