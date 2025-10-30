import type { Meta, StoryObj } from '@storybook/react'
import { Loading } from './loading'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const meta: Meta<typeof Loading> = {
  title: 'Feedback/Loading',
  component: Loading,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Loading>

/**
 * Story padrão — exibe o componente centralizado.
 */
export const Default: Story = {}

/**
 * Story com texto de contexto — útil para visualizar como o Loading
 * aparece em uma tela com conteúdo adicional.
 */
export const WithText: Story = {
  render: () => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        height: '200px',
        justifyContent: 'center',
      }}
    >
      <Loading />
      <Typography variant="body1">Carregando dados...</Typography>
    </Box>
  ),
}