import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import GamerInput from '../../components/CreateGameForm/GamerInput'
import './styles.scss'

const CreateGameForm = () => {
  const [currentGamersCount, setCurrentGamersCount] = React.useState(5)
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      gamers: ['', '', '', '', '']
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'gamers',
    shouldUnregister: true
  })

  const submit = data => {
    console.log(data)
  }

  const removeGamer = indexToRemove => () => {
    setCurrentGamersCount(value => value - 1)
    remove(indexToRemove)
  }

  const addGamer = () => {
    setCurrentGamersCount(value => value + 1)
    append()
  }

  const removeEnabled = currentGamersCount > 5

  return (
    <form onSubmit={handleSubmit(submit)} autoComplete="off">
      <input
        {...register('name', { required: true })}
        placeholder="Oyun Adı"
        className="full-width"
        autoFocus
      />
      <h2>Oyuncular</h2>

      {fields.map((field, index) => (
        <GamerInput
          key={field.id}
          {...register(`gamers.${index}`, { required: true })}
          placeholder={`${index + 1}. Oyuncunun Adı`}
          removeGamer={removeGamer(index)}
          removeEnabled={removeEnabled}
        />
      ))}

      <div className="form-actions">
        <button type="button" onClick={addGamer}>
          Oyuncu Ekle
        </button>
        <button type="submit">Oluştur</button>
      </div>
    </form>
  )
}

export default CreateGameForm
