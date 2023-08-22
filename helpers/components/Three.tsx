'use client';

import { r3f, r3fBack } from '@helpers/global';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const UseCanvasFront = ({ children }: Props) => {
  return <r3f.In>{children}</r3f.In>;
};

export const UseCanvasBack = ({ children }: Props) => {
  return <r3fBack.In>{children}</r3fBack.In>;
};
