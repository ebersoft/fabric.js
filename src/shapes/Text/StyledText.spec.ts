import { FabricText } from './Text';

describe('setSelectionStyles', () => {
  test('will set properties at the correct position', () => {
    const text = new FabricText('Hello', {
      styles: {
        0: {
          0: {
            fontSize: 33,
            fill: 'blue',
            deltaY: 44,
          },
        },
      },
    });
    const [style1, style2] = text.getSelectionStyles(0, 2);
    expect(style1.fontSize).toBe(33);
    expect(style1.deltaY).toBe(44);
    expect(style1.fill).toBe('blue');
    expect(style2).toEqual({});
    text.setSelectionStyles(
      {
        fontSize: undefined,
        deltaY: 0,
      },
      0,
      2
    );
    const [style1After, style2After] = text.getSelectionStyles(0, 2);
    expect(Object.hasOwn(style1After, 'fontSize')).toBe(false);
    expect(style1After.deltaY).toBe(0);
    expect(style1After.fill).toBe('blue');
    expect(style2After).toEqual({
      deltaY: 0,
    });
  });
});
