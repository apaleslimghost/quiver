import type { Tag as TagModel } from '@prisma/client'
import type { FC } from 'react'
import tag from './tag.css'

export const Tag: FC<Partial<TagModel>> = ({ name }) => (
	<span className={tag}>{name}</span>
)
