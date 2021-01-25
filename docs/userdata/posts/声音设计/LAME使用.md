title: 混响的运用
------------------------------------
<!-- zh-CN:+ -->
## 中文
```
用法：lame.exe [options] <infile> [outfile]

    <infile>和/或<outfile>可以为“-”，表示stdin/stdout

推荐的：
    lame -V2 input.wav output.mp3

选项：
  输入选项：
    --scale <arg> 		通过<arg>缩放输入（乘以PCM数据）
    --scale-l <arg> 	通过<arg>缩放通道0（左）输入（乘以PCM数据）
    --scale-r <arg> 	通过<arg>缩放通道1（右）输入（乘以PCM数据）
    --swap-channel 		交换左/右通道
    --ignorelength 		忽略WAV标头中的文件长度
    --gain <arg> 		以分贝为单位应用增益调整，范围为-20.0至+12.0
    --mp1input 			输入文件是MPEG Layer I文件
    --mp2input 			输入文件是MPEG Layer II文件
    --mp3input 			输入文件是MPEG Layer III文件
    --nogap <file1> <file2> <...> 	一组连续文件的无缝编码
    --nogapout <dir>  	无缝编码的输出目录（必须在--nogap之前）
    --nogaptags 		允许在无间隙编码中使用VBR标签
    --out-dir <dir> 	输出目录，必须存在

  RAW PCM的输入选项：
    -r 					输入为原始pcm
    -s sfreq 			输入文件的采样频率（kHz）-默认44.1 kHz
    --signed 			输入已签名（默认）
    --unsigned 			输入是无符号的
    --bitwidth w 		输入的位宽为w（默认为16）
    -x 					强制输入的字节交换
    --little-endian 	输入为little-endian（默认）
    --big-endian 		输入是big-endian
    -a 					从立体声到单声道文件的缩混以进行单声道编码

  操作选项：
    -m <mode>			（j）联合，（s）简单，（f）强制，（d）双单声道，（m）单声道（l）左声道（r）右声道
                    	默认为（j）
                    	联合=尽可能使用MS和LR立体声
                    	简单=在所有帧上强制使用LR立体声
                    	强制=在所有帧上强制MS立体声。
    --preset type 		类型必须为“medium”，“standard”，“extreme”，“insane”，或平均所需比特率的值，具体取决于根据指定的值，将进行适当的质量设置使用。
                    	“ --preset help”提供了有关这些的更多信息
    --comp <arg>		选择比特率以达到<arg>的压缩率
    --replaygain-fast	快速但不准确地计算RG（默认）
    --replaygain 		准确计算RG并找到峰值样本
    --noreplaygain 		禁用ReplayGain分析
    --clipdetect		启用--replaygain-accurate 并打印一条消息发生削波，波形距满量程有多远
    --flush				尽快刷新输出流
    --freeformat		产生自由格式的比特流
    --decode 			input=mp3文件，output=wav
    -t 					在使用--decode时禁止写入wav标头

  详细程度：
    --disptime <arg> 	每arg秒打印一次进度报告
    -S 					不打印进度报告，VBR直方图
    --nohist 			禁用VBR直方图显示
    --quiet 			不要在屏幕上打印任何内容
    --silent 			不会在屏幕上打印任何内容，但是会导致致命错误
    --brief 			打印更多有用的信息
    --verbose 			打印很多有用的信息

  噪声整形和心理声学算法：
    -q <arg> 		<arg> = 0-9。默认-q 3
                    -q 0：最高品质，非常慢
                    -q 9：质量差，但速度快
    -h 				与-q 2相同。
    -f 				与-q 7相同。快速，质量不错。

  CBR（恒定比特率，默认）选项：
    -b <bitrate> 	以kbps设置比特率，默认为128 kbps
    --cbr 			强制使用恒定比特率

  ABR选项：
    --abr <bitrate> 	指定所需的平均比特率（而不是质量）

  VBR选项：
    -V n 			VBR的质量设置。默认值n=4
                    0=高质量，更大的文件。 9=较小的文件
    -v 				与-V 4相同
    --vbr-old 		使用旧的可变比特率（VBR）例程
    --vbr-new 		使用新的可变比特率（VBR）例程（默认）
    -Y 				让LAME忽略sfb21中的噪声，就像在CBR中一样（V3至V9.999的默认设置）
    -b <bitrate> 	指定最小允许的比特率，默认为32 kbps
    -B <bitrate> 	指定最大允许的比特率，默认为320 kbps
    -F 				严格执行-b选项，用于与不支持低比特率mp3
    -t 				禁用写入LAME标签
    -T 				启用并强制写入LAME标签

  MP3标头/流选项：
    -e <emp> 		去加重n/5/c（已淘汰）
    -c 				标记为版权
    -o 				标记为非原始
    -p 				错误保护。向每帧添加16位校验和（校验和计算正确）
    --nores 		禁用位库
    --strict-enforce-ISO 	尽可能符合ISO MPEG

    --buffer-constraint <constraint> 	约束的可用值：默认，严格，最大

  过滤器选项：
    --lowpass <freq> 			频率（kHz），低通滤波器截止频率高于freq
    --lowpass-width <freq> 		频率（kHz）-默认为低通频率的15％
    --highpass <freq> 			频率（kHz），低于freq的高通滤波器截止
    --highpass-width <freq> 	频率（kHz）-默认为高通频率的15％
    --resample <sfreq> 			输出文件的采样频率（kHz）-默认=自动

  ID3标签选项：
    --tt <title> 					音频/歌曲标题（版本1标记最多30个字符）
    --ta <artist> 				音频/歌曲艺术家（版本1标签最多30个字符）
    --tl <album> 					音频/歌曲专辑（版本1标记最多30个字符）
    --ty <year> 				音频/歌曲发行年份（1到9999）
    --tc <comment> 					用户定义的文本（v1标签最多30个字符，v1.1标签最多28个字符）
    --tn <track[/total]> 		音频/歌曲的曲目号和（可选）总数原始录音上的曲目数量。 （跟踪总共1到255。仅是曲目号创建v1.1标签，提供合计v2.0）。
    --tg <file> 					音频/歌曲类型（列表中的名称或编号）
    --ti <value> 					音频/歌曲AlbumArt（jpeg / png / gif文件，v2.3标记）
    --tv <id = value> 			由id和value（v2.3标记）指定的用户定义的帧。语法：--tv“ TXXX =说明=内容”
    --add-id3v2 				强制添加版本2标签
    --id3v1-only 				仅添加版本1标签
    --id3v2 					仅添加版本2标签
    --id3v2-utf16 				在Unicode文本编码中添加以下选项
    --id3v2-latin1 				在latin-1文本编码中添加以下选项
    --space-id3v1 				使用空格而不是null填充版本1标签
    --pad-id3v2 				与'--pad-id3v2-size 128'相同
    --pad-id3v2-size <value> 	添加了版本2标签，并使用额外的<值>字节填充
    --genre-list 				打印按字母顺序排序的ID3类型列表并退出
    --ignore-tag-errors 		忽略为标签传递的值中的错误

    注意：除非输入字段之一，否则不会添加版本2标记不适用于版本1标签（例如，标题字符串超过30个字符），或使用'--add-id3v2'或'--id3v2-only'选项，或将输出重定向到stdout。

MS-Windows特定的选项：
    --priority <type>	设置进程优先级：
                         0,1 =低优先级（IDLE_PRIORITY_CLASS）
                         2 =普通优先级（NORMAL_PRIORITY_CLASS，默认值）
                         3,4 =高优先级（HIGH_PRIORITY_CLASS）
    注意：不带参数调用“--priority”将选择优先级0。

其他：
    --license 		打印许可证信息

MPEG-1 layerIII 采样频率（kHz）：32 48 44.1
比特率（kbps）：32 40 48 56 64 80 96 112 128 160 192 224 256 320

MPEG-2 layerIII 采样频率（kHz）：16 24 22.05
比特率（kbps）：8 16 24 32 40 48 56 64 80 96 112 128 144 160

MPEG-2.5 layerIII 采样频率（kHz）：8 12 11.025
比特率（kbps）：8 16 24 32 40 48 56 64

```


## 英文
```
usage: lame.exe [options] <infile> [outfile]

    <infile> and/or <outfile> can be "-", which means stdin/stdout.

RECOMMENDED:
    lame -V2 input.wav output.mp3

OPTIONS:
  Input options:
    --scale <arg>   scale input (multiply PCM data) by <arg>
    --scale-l <arg> scale channel 0 (left) input (multiply PCM data) by <arg>
    --scale-r <arg> scale channel 1 (right) input (multiply PCM data) by <arg>
    --swap-channel  swap L/R channels
    --ignorelength  ignore file length in WAV header
    --gain <arg>    apply Gain adjustment in decibels, range -20.0 to +12.0
    --mp1input      input file is a MPEG Layer I   file
    --mp2input      input file is a MPEG Layer II  file
    --mp3input      input file is a MPEG Layer III file
    --nogap <file1> <file2> <...>
                    gapless encoding for a set of contiguous files
    --nogapout <dir>
                    output dir for gapless encoding (must precede --nogap)
    --nogaptags     allow the use of VBR tags in gapless encoding
    --out-dir <dir> output dir, must exist

  Input options for RAW PCM:
    -r              input is raw pcm
    -s sfreq        sampling frequency of input file (kHz) - default 44.1 kHz
    --signed        input is signed (default)
    --unsigned      input is unsigned
    --bitwidth w    input bit width is w (default 16)
    -x              force byte-swapping of input
    --little-endian input is little-endian (default)
    --big-endian    input is big-endian
    -a              downmix from stereo to mono file for mono encoding

  Operational options:
    -m <mode>       (j)oint, (s)imple, (f)orce, (d)ual-mono, (m)ono (l)eft (r)ight
                    default is (j)
                    joint  = Uses the best possible of MS and LR stereo
                    simple = force LR stereo on all frames
                    force  = force MS stereo on all frames.
    --preset type   type must be "medium", "standard", "extreme", "insane",
                    or a value for an average desired bitrate and depending
                    on the value specified, appropriate quality settings will
                    be used.
                    "--preset help" gives more info on these
    --comp  <arg>   choose bitrate to achieve a compression ratio of <arg>
    --replaygain-fast   compute RG fast but slightly inaccurately (default)
    --replaygain-accurate   compute RG more accurately and find the peak sample
    --noreplaygain  disable ReplayGain analysis
    --clipdetect    enable --replaygain-accurate and print a message whether
                    clipping occurs and how far the waveform is from full scale
    --flush         flush output stream as soon as possible
    --freeformat    produce a free format bitstream
    --decode        input=mp3 file, output=wav
    -t              disable writing wav header when using --decode

  Verbosity:
    --disptime <arg>print progress report every arg seconds
    -S              don't print progress report, VBR histograms
    --nohist        disable VBR histogram display
    --quiet         don't print anything on screen
    --silent        don't print anything on screen, but fatal errors
    --brief         print more useful information
    --verbose       print a lot of useful information

  Noise shaping & psycho acoustic algorithms:
    -q <arg>        <arg> = 0...9.  Default  -q 3
                    -q 0:  Highest quality, very slow
                    -q 9:  Poor quality, but fast
    -h              Same as -q 2.
    -f              Same as -q 7.   Fast, ok quality

  CBR (constant bitrate, the default) options:
    -b <bitrate>    set the bitrate in kbps, default 128 kbps
    --cbr           enforce use of constant bitrate

  ABR options:
    --abr <bitrate> specify average bitrate desired (instead of quality)

  VBR options:
    -V n            quality setting for VBR.  default n=4
                    0=high quality,bigger files. 9=smaller files
    -v              the same as -V 4
    --vbr-old       use old variable bitrate (VBR) routine
    --vbr-new       use new variable bitrate (VBR) routine (default)
    -Y              lets LAME ignore noise in sfb21, like in CBR
                    (Default for V3 to V9.999)
    -b <bitrate>    specify minimum allowed bitrate, default  32 kbps
    -B <bitrate>    specify maximum allowed bitrate, default 320 kbps
    -F              strictly enforce the -b option, for use with players that
                    do not support low bitrate mp3
    -t              disable writing LAME Tag
    -T              enable and force writing LAME Tag

  MP3 header/stream options:
    -e <emp>        de-emphasis n/5/c  (obsolete)
    -c              mark as copyright
    -o              mark as non-original
    -p              error protection.  adds 16 bit checksum to every frame
                    (the checksum is computed correctly)
    --nores         disable the bit reservoir
    --strictly-enforce-ISO   comply as much as possible to ISO MPEG spec
    --buffer-constraint <constraint> available values for constraint:
                                     default, strict, maximum

  Filter options:
  --lowpass <freq>        frequency(kHz), lowpass filter cutoff above freq
  --lowpass-width <freq>  frequency(kHz) - default 15% of lowpass freq
  --highpass <freq>       frequency(kHz), highpass filter cutoff below freq
  --highpass-width <freq> frequency(kHz) - default 15% of highpass freq
  --resample <sfreq>  sampling frequency of output file(kHz)- default=automatic

  ID3 tag options:
    --tt <title>    audio/song title (max 30 chars for version 1 tag)
    --ta <artist>   audio/song artist (max 30 chars for version 1 tag)
    --tl <album>    audio/song album (max 30 chars for version 1 tag)
    --ty <year>     audio/song year of issue (1 to 9999)
    --tc <comment>  user-defined text (max 30 chars for v1 tag, 28 for v1.1)
    --tn <track[/total]>   audio/song track number and (optionally) the total
                           number of tracks on the original recording. (track
                           and total each 1 to 255. just the track number
                           creates v1.1 tag, providing a total forces v2.0).
    --tg <genre>    audio/song genre (name or number in list)
    --ti <file>     audio/song albumArt (jpeg/png/gif file, v2.3 tag)
    --tv <id=value> user-defined frame specified by id and value (v2.3 tag)
                    syntax: --tv "TXXX=description=content"
    --add-id3v2     force addition of version 2 tag
    --id3v1-only    add only a version 1 tag
    --id3v2-only    add only a version 2 tag
    --id3v2-utf16   add following options in unicode text encoding
    --id3v2-latin1  add following options in latin-1 text encoding
    --space-id3v1   pad version 1 tag with spaces instead of nulls
    --pad-id3v2     same as '--pad-id3v2-size 128'
    --pad-id3v2-size <value> adds version 2 tag, pad with extra <value> bytes
    --genre-list    print alphabetically sorted ID3 genre list and exit
    --ignore-tag-errors  ignore errors in values passed for tags

    Note: A version 2 tag will NOT be added unless one of the input fields
    won't fit in a version 1 tag (e.g. the title string is longer than 30
    characters), or the '--add-id3v2' or '--id3v2-only' options are used,
    or output is redirected to stdout.

MS-Windows-specific options:
    --priority <type>  sets the process priority:
                         0,1 = Low priority (IDLE_PRIORITY_CLASS)
                         2 = normal priority (NORMAL_PRIORITY_CLASS, default)
                         3,4 = High priority (HIGH_PRIORITY_CLASS))
    Note: Calling '--priority' without a parameter will select priority 0.

Misc:
    --license       print License information

MPEG-1   layer III sample frequencies (kHz):  32  48  44.1
bitrates (kbps): 32 40 48 56 64 80 96 112 128 160 192 224 256 320

MPEG-2   layer III sample frequencies (kHz):  16  24  22.05
bitrates (kbps):  8 16 24 32 40 48 56 64 80 96 112 128 144 160

MPEG-2.5 layer III sample frequencies (kHz):   8  12  11.025
bitrates (kbps):  8 16 24 32 40 48 56 64
```
<!-- zh-CN:- -->
