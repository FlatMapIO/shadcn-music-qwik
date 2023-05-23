import * as fs from 'fs'
import * as path from 'node:path'
import { globbySync } from 'globby'

const head = `/** @jsxImportSource react */`

if (process.argv.length < 3) {
  console.error(`tsx scripts/add-react-jsx-head.ts <dir>`)
  process.exit(1)
}

const dir = path.resolve(process.argv[2])

try {
  if (!fs.statSync(dir).isDirectory()) {
    console.error(`${dir} is not a directory`)
    process.exit(1)
  }
} catch (error) {
  console.error(error)
  process.exit(1)
}

// get all tsx files
const files = fs.readdirSync(dir).filter((it) => it.endsWith('.tsx'))

for (const file of files) {
  const code = fs.readFileSync(`${dir}/${file}`, { encoding: 'utf-8' })
  // check head exists
  if (code.trimStart().startsWith(head)) {
    console.log('⚡️ skip', file)
    continue
  }

  const newCode = `${head}\n${code}`
  console.log('✨ add head to', file)
  // overwrite
  fs.writeFileSync(`${dir}/${file}`, newCode)
}
