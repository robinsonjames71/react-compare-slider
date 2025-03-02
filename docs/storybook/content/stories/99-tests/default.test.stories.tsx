import { expect } from '@storybook/jest';
import type { Meta } from '@storybook/react';
import { waitFor, within } from '@storybook/testing-library';
import type { ReactCompareSlider } from 'react-compare-slider';

import { Template, getArgs } from './test-utils.test';

const meta: Meta<typeof ReactCompareSlider> = {
  title: 'Tests/Browser/Default',
};
export default meta;

/** Test default props. */
export const Default = Template.bind({});
Default.args = getArgs();

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const sliderRoot = canvas.queryByTestId(Default.args?.['data-testid']) as Element;

  // Should have elements on mount.
  await new Promise((resolve) => setTimeout(resolve, 500));
  await waitFor(() => expect(sliderRoot).toBeInTheDocument());
  await waitFor(() => expect(canvas.getByAltText('one')).toBeInTheDocument());
  await waitFor(() => expect(canvas.getByAltText('two')).toBeInTheDocument());

  // Should have initial position on mount.
  await waitFor(() => expect(Default.args?.onPositionChange).toHaveBeenLastCalledWith(50));
};
