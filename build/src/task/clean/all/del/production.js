import { task, src, dest, series } from 'gulp'
import del from 'del';
import { output } from '../../../var/PATHS'

task('clean-all-del', () =>
  del(output.common.glob , { force: true })
)
