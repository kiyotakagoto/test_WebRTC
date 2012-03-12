#! /usr/bin/perl
use strict;
use warnings;
use CGI;
use MIME::Base64;
use Time::Piece qw//;


my $cgi = CGI->new;
my $capture = $cgi->param('capture');

my $t = Time::Piece::localtime();
my $filename = $t->epoch;
if ( $img ) {
    open my $fh, '>', "capture/${filename}"
        or die $!;
    print $fh MIME::Base64::decode($capture);
    close($fh);
}

print $cgi->header(
    -charset => 'UTF-8',
    -type => 'text/plain',
    -status => 200,
    );
print 'success';
