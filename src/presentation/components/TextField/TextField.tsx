import { ComponentProps, Text } from '@/presentation/components'
import '@/presentation/components/TextField/TextField.scss'

interface TextFieldProps extends ComponentProps<HTMLInputElement> {
  label?: string
  name: string
  id?: string
  value?: string | ReadonlyArray<string> | number | undefined;
  maxLength?: number
}

export function TextField({ label, name, ...others }: TextFieldProps) {
  return (
    <div className="text-field">
      {label && (<label htmlFor={name}><Text size="md" >{label}</Text></label>)}
      <input className="text-field__input" name={name} {...others} />
    </div>
  )
}
