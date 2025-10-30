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
 * Standard story — displays the component in the center.
 */
export const Default: Story = {}

/**
 * Story with contextual text — useful for visualizing as a Loading
 * It appears on a screen with additional content.
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
      <Typography variant="body1">Loading data...</Typography>
    </Box>
  ),
}