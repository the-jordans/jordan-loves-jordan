#!/usr/bin/env node
import { readFile, writeFile } from 'fs/promises'
import { spawnSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pkgPath = path.resolve(__dirname, '..', 'package.json')
const raw = await readFile(pkgPath, 'utf8')
const pkg = JSON.parse(raw)
const v = parseInt(pkg.version, 10)
const next = Number.isNaN(v) ? 1 : v + 1
pkg.version = String(next)
await writeFile(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8')
spawnSync('git', ['add', 'package.json'], { stdio: 'inherit' })
process.exit(0)
