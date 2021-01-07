title: Waves人声混音的12个基本步骤
------------------------------------
<!-- zh-CN:+ -->
## 原始干声变得光泽与质感
### 1.合成与编辑
人声混音的第一步完全不是混音——是编辑。如果你只负责混音，那么这部分工作很可能在你收到音轨的时候已经完成了。如果不，就要靠你帮助歌手创造尽可能最佳的人声部分，这个过程叫“合成Comping”。

除了合成之外，其他编辑的任务可能是修正歌手没有演唱的缝隙，例如过重的呼吸声。调整呼吸的轻重取决于歌曲的风格，有时你想要它有时你又想消除掉它。但不管怎样，使用DeBreath这样的插件编辑呼吸时很容易的。

完成合成与编辑之后，可以歇一歇了。放松生理和心理，对于保持敏锐的听觉和清晰的视角很有帮助。

<!-- next -->

### 2.修音
有时候，在人声会有音准和音调的缺陷。 虽然这本身并不是一件坏事，但你可能会想用Waves Tune Real-Time来调整有问题的音。

修完音后，有个好方法是将效果导出（非破坏性地）一条新的音频，以节省电脑的处理性能。

<!-- next -->

### 3.分段增益
人声在混音当中有可能是动态最大的乐器了，其作为歌曲最重要的部分，应该需要良好的控制。

为避免过度压缩造成“泵浦效应“，你甚至可以手动调整每段音频输出的动态，或者应用Vocal Rider插件。

<!-- next -->

### 4.减法均衡器
前面的基础工作完成之后，是时候关注声音的音质啦~第一步是清理所有有问题的频率。包括低频部分和任何刺耳的频率。

最简单的着手点是低频。人声不会有很多80-100Hz的声音，所以一般用一个高通滤波器切掉80-100Hz以下的频率。

其他不好听的频率，可以尝试扫频：将某个频段的Q值调高，使其非常窄，然后慢慢扫描所有的频率，直到听到你非常讨厌的声音，就可以停下来，尝试减弱该处频率，并减少Q值以找到最佳效果。

请记住EQ黄金法则之一：减窄增宽。在用减法eq时要用较高的Q值，用加法EQ时采用较低的Q值。

同时，动态均衡器对人声非常有用，因为EQ的频率会随着歌曲发生变化。这种均衡器使用水平依赖的波段，只有在超过设定的阈值时才会使用，从而使你只有在需要时才能影响某些频率。

<!-- next -->

### 5.加法均衡器
在消除人声的问题频率之后，是时候增加一些声音的特质了。例如，嘻哈音乐人声会加重低频增加力量感，摇滚音乐会增加中频以在密集的混音中突出人声，流行音乐人声增加高频以增强现场感。

小心2-5kHz的频率，你不会想制造任何额外的刺耳声的。

* 有的工程师喜欢在EQ之前加压缩器，有的喜欢先加EQ，再在不同阶段加压缩。 每种顺序都会给你一个不同的声音，所以一定要试验找出最适合你情况的方式。

<!-- next -->

### 6.消齿音
如果人声有刺耳的声音，人们经常会用到DeEsser来解决问题。Deesser是一个对特定范围频率的压缩器，通常用来移除”嘶“和”T“造成的刺耳声音。

<!-- next -->

### 7.压缩
一旦你定下了人声的基调，就应该压紧动态。在人声中常用的压缩器有很多 ，都有不同的音染特色和动态处理。

使用峰值限制式压缩器（如CLA-76或SSL-E或GChannel压缩器）进行3-6dB的压缩是很常见的。这阶段的压缩器只能用来音量最高的峰值，它不应该在整段人声中都起作用。

接下来，是时候在压缩器上设置启动时间Attack和释放时间Release了。这是找到最佳设置的简单方法：从最慢的启动时间和最快的释放时间开始，慢慢增加启动时间，直到开始削减人声的初始瞬态，之后往回调一点就可以了；另外，慢慢减少释放时间直到压缩器开始与歌曲一起“呼吸”。

压缩指针在最响亮的峰值期间显示3-6 dB的增益衰减比较合适，然后在它返回到0之前，下一个峰值再次被压缩。

<!-- next -->

### 8.更多的压缩
许多工程师喜欢串联压缩，这意味着他们使用多个压缩器进行少量的压缩。 通常，他们会从快速峰值限制式压缩器开始，然后使用较慢的压缩器来“挤压”人声并帮助平衡动态。

其中最受欢迎的压缩器之一是CLA-2A Optical（视觉式？）压缩器，但其他相对较慢的压缩器如PuigChild或Kramer PIE也都很棒。

我们的想法是使用第一台压缩器快速限制峰值，第二台较慢的压缩器用于挤压人声并创造更一致的动态。

<!-- next -->

### 9.更多的（并联）压缩
如果你想要一个现代的、贴脸的人声，通常使用并联压缩。 只需将人声发送到具有激进压缩器（如CLA-76或dbx 160）的效果轨道，调到适合的量即可。

不要害怕使用高压缩比例，快速启动和释放时间以及低阈值。 然后，试着混合一点高度压缩的信号。 这将有助于保持人声靠前，同时仍保留原始的自然动态。

<!-- next -->

### 10.饱和度与失真
非常小的饱和度和失真会使人声变得更厚，并通过添加泛音可以使人声在紧密的混音中更突出。

值得庆幸的是，现代的插件允许你在DAW中轻松模拟这些独特的饱和失真形式。

Scheps 73的前置放大器部分非常适用于此，以及NLS Channel控制台的“失真”部分也是如此。

如果您想要更强劲的声音，请尝试将人声发送到效果轨道并自由地增减饱和度和/或失真。 然后，在受影响的轨道中尝试不同的混合比例。

<!-- next -->

### 11.混响和延迟
现在人声的动态和基调都处于一个好的地方，是时候添加一些空间了。 立体声混响和延迟效果非常适合增加宽度，而单声道效果可以很好地创造深度感。

通常，混响和延迟与该轨道的节奏同步。 较短的时间会产生较小的空间，而较长的时间会产生较大的空间。

为了避免糊掉混音，试着让效果的衰减在下一个段落之前逐渐消失。 根据人声的节奏，可以是1/8音符，1/4音符，1/2音符等等。

H-Delay插件非常适合添加延迟或回声以强调某些词和短语。 对于此设置，通常在效果轨道上插入延迟插件，并自动将人声发送到该效果轨。 然后，有选择地发送您想要重复的词或短语，并设置延迟的时间，反馈和EQ过滤器。

* 混音黑科技：签名系列
为人声添加EQ、压缩、动态处理和其他效果是一门科学和艺术。 值得庆幸的是，经验丰富的混音师Chris Lord-Alge（Green Day，Muse），Greg Wells（Adele，Katy Perry），Butch Vig（Nirvana，Garbage），Jack Joseph Puig（U2，Lady Gaga）和Tony Maserati（Beyoncé，Jay Z） 将他们的混音处理链转换为一体化的签名系列插件。

签名系列插件提供独特的均衡，压缩，混响和动态处理组合，专为各种人声而设计。 每个都有各种预设，以帮助您快速实现所需的声音。

<!-- next -->

### 12.自动化
自动化是人声处理的锦上添花。简单地改变整首歌曲中的人声音量是一种非常有效的方式，可以让人声更加真实。

相似地，非常微小地自动化混响和延迟或饱和度的变化，以适应歌曲的发展可以让音乐更具“情感”。

在混音过程中，完全可以跳过某些步骤。如果你有一个想法，那就去做吧！如果您打开工程并听到原始音轨时，就可以完美地想象EQ和压缩应该如何做，那就去吧！别让灵感打盹！

同样地，如果在你的通道条插件中，迷茫地进行微小的调整，那不如就跳转到需要完成的更多的“机械”编辑任务上。
<!-- zh-CN:- -->

<!-- en-US:+ -->
## The original dry sound becomes luster and texture
### 1. Synthesis and editing
The first step in vocal mixing is not mixing at all-editing. If you are only in charge of mixing, then this part of the work is likely to have been completed when you receive the audio track. If not, it is up to you to help the singer create the best possible vocal part. This process is called "compositing."

In addition to compositing, the task of other editors may be to correct gaps where the singer does not sing, such as excessive breathing. Adjusting the severity of breathing depends on the style of the song, sometimes you want it and sometimes you want to eliminate it. But anyway, it's easy to edit the breath using plugins like DeBreath.

After finishing compositing and editing, you can take a break. Relaxing physical and psychological is very helpful for maintaining sharp hearing and clear perspective.

<!-- next -->

### 2. Sound repair
Sometimes, there will be defects in intonation and pitch in the human voice. Although this is not a bad thing in itself, you may want to use Waves Tune Real-Time to adjust the problematic sound.

After repairing the sound, a good way is to export the effect (non-destructively) to a new audio to save the processing power of the computer.

<!-- next -->

### 3. Sectional gain
The human voice may be the most dynamic instrument in the mix. As the most important part of the song, it should be well controlled.

In order to avoid the "pumping effect" caused by excessive compression, you can even manually adjust the dynamics of each audio output, or apply the Vocal Rider plug-in.

<!-- next -->

### 4. Subtractive equalizer
After the previous basic work is completed, it's time to pay attention to the sound quality of the sound~ The first step is to clean up all the problematic frequencies. Including the low frequency part and any harsh frequencies.

The easiest starting point is the low frequency. The human voice does not have a lot of 80-100Hz sound, so a high-pass filter is generally used to cut the frequency below 80-100Hz.

For other unpleasant frequencies, you can try sweeping: increase the Q value of a certain frequency band to make it very narrow, and then slowly scan all frequencies until you hear the sound you hate, then you can stop and try to attenuate it The frequency at this point, and reduce the Q value to find the best effect.

Remember one of the EQ golden rules: narrowing and widening. Use a higher Q value when subtracting eq, and use a lower Q value when using additive EQ.

At the same time, dynamic equalizer is very useful for human voice, because the frequency of EQ will change with the song. This type of equalizer uses level-dependent bands, and will only be used when the set threshold is exceeded, so that you can affect certain frequencies only when needed.

<!-- next -->

### 5. Additive equalizer
After eliminating the problematic frequencies of the human voice, it is time to add some vocal qualities. For example, hip-hop music vocals will accentuate low frequencies to increase the sense of power, rock concerts increase mid-range frequencies to highlight vocals in dense mixing, and pop music vocals increase high frequencies to enhance the sense of presence.

Be careful with frequencies of 2-5kHz, you won't want to make any extra harsh sounds.

* Some engineers like to add a compressor before EQ, and some like to add EQ first, and then add compression at different stages. Each sequence will give you a different voice, so be sure to experiment to find the best method for your situation.

<!-- next -->

### 6. Suppress the tooth
If the human voice has a harsh sound, people often use DeEsser to solve the problem. Deesser is a compressor for a specific range of frequencies, usually used to remove the harsh sounds caused by "hiss" and "T".

<!-- next -->

### 7. Compression
Once you have set the tone of the human voice, you should tighten the dynamics. There are many compressors commonly used in vocals, all with different sound dyeing characteristics and dynamic processing.

It is common to use peak limiting compressors (such as CLA-76 or SSL-E or GChannel compressors) for 3-6dB compression. The compressor at this stage can only be used for the highest peak volume, it should not work in the entire voice.

Next, it is time to set the start time Attack and the release time Release on the compressor. This is a simple way to find the best setting: start with the slowest start time and the fastest release time, slowly increase the start time until you start to reduce the initial transient of the human voice, and then you can call back a little; in addition, Slowly reduce the release time until the compressor starts "breathing" with the song.

The compression pointer shows that a gain reduction of 3-6 dB is appropriate during the loudest peak period, and then before it returns to 0, the next peak is compressed again.

<!-- next -->

### 8. More compression
Many engineers like serial compression, which means they use multiple compressors for a small amount of compression. Usually, they start with a fast peak limiting compressor and then use a slower compressor to "squeeze" the vocals and help balance the dynamics.

One of the most popular compressors is the CLA-2A Optical (visual?) compressor, but other relatively slow compressors such as PuigChild or Kramer PIE are also great.

The idea is to use the first compressor to quickly limit the peaks, and the second slower compressor to squeeze the vocals and create more consistent dynamics.

<!-- next -->

### 9. More (parallel) compression
If you want a modern, face-to-face vocal, you usually use parallel compression. Just send the vocals to an effect track with a radical compressor (such as CLA-76 or dbx 160) and adjust it to the right amount.

Don't be afraid to use high compression ratios, fast start and release times, and low thresholds. Then, try to mix a bit of a highly compressed signal. This will help keep the vocals forward while still retaining the original natural dynamics.

<!-- next -->

### 10. Saturation and distortion
Very small saturation and distortion will make the human voice thicker, and by adding overtones, the human voice can be more prominent in a tight mix.

Fortunately, modern plug-ins allow you to easily simulate these unique forms of saturation distortion in DAW.

The preamplifier part of Scheps 73 is very suitable for this, as is the "distortion" part of the NLS Channel console.

If you want a more powerful sound, try sending the vocals to the effects track and freely increase or decrease saturation and/or distortion. Then, try different mixing ratios in the affected tracks.

<!-- next -->

### 11. Reverb and Delay
Now that the dynamics and tone of the human voice are in a good place, it's time to add some space. Stereo reverb and delay effects are great for adding width, while mono effects can create depth.

Usually, the reverb and delay are synchronized with the rhythm of the track. A shorter time will produce a smaller space, and a longer time will produce a larger space.

To avoid blurring the mix, try to make the decay of the effect fade away before the next passage. According to the rhythm of the human voice, it can be 1/8 note, 1/4 note, 1/2 note, etc.

The H-Delay plugin is very suitable for adding delay or echo to emphasize certain words and phrases. For this setting, a delay plug-in is usually inserted on the effect track and the human voice is automatically sent to the effect track. Then, selectively send the words or phrases you want to repeat, and set the delay time, feedback and EQ filter.

* Mix Black Technology: Signature Series
Adding EQ, compression, dynamics, and other effects to vocals is a science and art. Thankfully, the experienced mixers Chris Lord-Alge (Green Day, Muse), Greg Wells (Adele, Katy Perry), Butch Vig (Nirvana, Garbage), Jack Joseph Puig (U2, Lady Gaga) and Tony Maserati (Beyoncé, Jay Z) converted their mixing processing chain into an all-in-one signature series of plug-ins.

Signature series plug-ins provide a unique combination of equalization, compression, reverberation and dynamic processing, designed for various vocals. Each has various presets to help you quickly achieve the desired sound.

<!-- next -->

### 12. Automation
Automation is the icing on the cake for vocal processing. Simply changing the volume of the human voice in the entire song is a very effective way to make the human voice more realistic.

Similarly, very small automation of reverberation and delay or saturation changes to adapt to the development of the song can make the music more "emotional."

During the mixing process, some steps can be skipped. If you have an idea, do it! If you can perfectly imagine how EQ and compression should be done when you open the project and hear the original audio track, go for it! Don't let inspiration nap!

Similarly, if you are confused about making minor adjustments in your channel strip plug-in, it is better to jump to more "mechanical" editing tasks that need to be completed.
<!-- en-US:- -->