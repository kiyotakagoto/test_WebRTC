#! /usr/bin/perl
use strict;
use warnings;
use CGI;
use MIME::Base64;
use Time::Piece qw//;


my $cgi = CGI->new;
my $url = $cgi->param('url');

my $t = Time::Piece::localtime();
my $filename = $t->epoch;
`wget $url -O tmp/$filename.jpg`;

print $cgi->header(
    -charset => 'UTF-8',
    -type => 'text/plain',
    -status => 200,
    );
print 'success';
