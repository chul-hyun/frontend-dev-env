import { task, src, dest, series } from 'gulp'
import del from 'del';
import { output } from '../../var/PATHS'

task('clean', () =>
  del(output.common.glob , { force: true })
)
