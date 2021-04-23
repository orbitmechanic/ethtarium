from PIL import Image
import os
os.chdir('../src/images/')
for i in (os.listdir()):
    if(i[:4]!='mini'):
        print('processing.. '+i)
        img = Image.open(i)
        img.save('mini_'+i,quality=10)
        os.remove(i)
