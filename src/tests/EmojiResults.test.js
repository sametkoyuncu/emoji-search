import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import EmojiResults from '../EmojiResults'
import filterEmoji from '../filterEmoji'

describe('Header Test', () => {
  beforeEach(() => {
    const state = {
      filteredEmoji: filterEmoji('', 20),
    }
    render(<EmojiResults emojiData={state.filteredEmoji} />)
  })

  test('EmojiResults render edildi mi?', () => {
    const emojiList = screen.getAllByAltText('Grinning')
    expect(emojiList.length).toEqual(1)
  })
})
