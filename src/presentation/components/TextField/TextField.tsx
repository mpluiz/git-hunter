import { ComponentProps } from '@/presentation/components/core'
import '@/presentation/components/TextField/TextField.scss'
import { Text } from '@/presentation/components/Text'

interface TextFieldProps extends ComponentProps<HTMLInputElement> {
  label?: string
  name: string
  id?: string
  value?: string | ReadonlyArray<string> | number | undefined;
}

export function TextField({ label, name, ...others }: TextFieldProps) {
  return (
    <div className="text-field">
      {label && (<label htmlFor={name}><Text size="md" >{label}</Text></label>)}
      <input className="text-field__input" name={name} {...others} />
    </div>
  )
}
