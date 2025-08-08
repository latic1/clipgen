from pytubefix import YouTube
from pytubefix.cli import on_progress

url1="https://youtu.be/S-gCTaFIdyQ"

yt = YouTube(url1,on_progress_callback=on_progress)
print(yt.title)

ys = yt.streams.get_highest_resolution()
ys.download()